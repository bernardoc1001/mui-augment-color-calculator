import React, { useState } from 'react';
import { TextField, Card, CardContent, Typography, Box } from '@mui/material';
import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material/styles'; // Removed unused 'Theme'

// Remove the 'accent' related type augmentations
declare module '@mui/material/styles' {
    interface Palette {
        // Removed accent: PaletteColor;
    }

    interface PaletteOptions {
        // Removed accent?: PaletteColorOptions;
    }
}

interface ColorInput {
    primary: string;
    secondary: string;
    // Removed accent: string;
}

interface AugmentedColor {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
}

const ColorCard: React.FC<{
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    augmentedColor: AugmentedColor | null;
}> = ({ label, value, onChange, augmentedColor }) => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {label} Color
                </Typography>
                <TextField
                    label={label}
                    variant="outlined"
                    fullWidth
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    inputProps={{ maxLength: 7 }} // Limit to hex code length
                />
                {augmentedColor && (
                    <Box mt={2}>
                        <Typography variant="subtitle2">Augmented Colors:</Typography>
                        <Box display="flex" gap={1} mt={1}>
                            <Box
                                sx={{
                                    width: 50,
                                    height: 50,
                                    bgcolor: augmentedColor.main,
                                    color: augmentedColor.contrastText,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '0.8rem',
                                }}
                            >
                                Main
                            </Box>
                            <Box
                                sx={{
                                    width: 50,
                                    height: 50,
                                    bgcolor: augmentedColor.light,
                                    color: augmentedColor.contrastText,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '0.8rem',
                                }}
                            >
                                Light
                            </Box>
                            <Box
                                sx={{
                                    width: 50,
                                    height: 50,
                                    bgcolor: augmentedColor.dark,
                                    color: augmentedColor.contrastText,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '0.8rem',
                                }}
                            >
                                Dark
                            </Box>
                        </Box>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

const App: React.FC = () => {
    const [colors, setColors] = useState<Omit<ColorInput, 'accent'>>({
        primary: '#007bff',
        secondary: '#6c757d',
    });

    const augmentedPrimary = colors.primary
        ? createTheme({ palette: { primary: { main: colors.primary } } }).palette.primary
        : null;
    const augmentedSecondary = colors.secondary
        ? createTheme({ palette: { secondary: { main: colors.secondary } } }).palette.secondary
        : null;
    // Removed augmentedAccent

    const handleColorChange = (name: keyof Omit<ColorInput, 'accent'>, value: string) => {
        setColors((prevColors) => ({
            ...prevColors,
            [name]: value,
        }));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                MUI Color Augmentation
            </Typography>
            <ColorCard
                label="Primary"
                value={colors.primary}
                onChange={(newValue) => handleColorChange('primary', newValue)}
                augmentedColor={augmentedPrimary as AugmentedColor | null}
            />
            <ColorCard
                label="Secondary"
                value={colors.secondary}
                onChange={(newValue) => handleColorChange('secondary', newValue)}
                augmentedColor={augmentedSecondary as AugmentedColor | null}
            />
            {/* Removed the Accent Card */}
        </Box>
    );
};

export default App;