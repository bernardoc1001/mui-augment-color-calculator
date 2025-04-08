import React, { useState } from 'react';
import { TextField, Card, CardContent, Typography, Box, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material/styles';

interface ColorInput {
    primary: string;
    secondary: string;
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
    const handleColorClick = (colorCode: string) => {
        navigator.clipboard.writeText(colorCode);
        console.log(`Copied: ${colorCode}`);
    };

    return (
        <Card sx={{ mb: 2, flexGrow: 1, minWidth: { xs: '100%', sm: 300 } }}>
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
                    inputProps={{ maxLength: 7 }}
                />
                {augmentedColor && (
                    <Box mt={2}>
                        <Typography variant="subtitle2">Augmented Colors:</Typography>
                        <Box
                            display="flex"
                            gap={1}
                            mt={1}
                            sx={{
                                flexWrap: 'wrap',
                            }}
                        >
                            {['main', 'light', 'dark'].map((shade) => (
                                <Tooltip key={shade} title="Click to copy">
                                    <Box
                                        onClick={() => handleColorClick(augmentedColor[shade as keyof AugmentedColor])}
                                        sx={{
                                            flexGrow: 1, // Make rectangles grow to take equal space
                                            minWidth: { xs: 'calc(50% - 0.5px)', sm: 'auto' }, // Adjust minWidth for smaller screens
                                            height: 70,
                                            bgcolor: augmentedColor[shade as keyof AugmentedColor],
                                            color: augmentedColor.contrastText,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize: '0.7rem',
                                            cursor: 'pointer',
                                            mb: { xs: 1, sm: 0 },
                                        }}
                                    >
                                        {shade.charAt(0).toUpperCase() + shade.slice(1)}
                                        <Typography variant="caption" textAlign="center">{augmentedColor[shade as keyof AugmentedColor]}</Typography>
                                    </Box>
                                </Tooltip>
                            ))}
                        </Box>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

const App: React.FC = () => {
    const [colors, setColors] = useState<ColorInput>({
        primary: '#007bff',
        secondary: '#6c757d',
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const augmentedPrimary = colors.primary
        ? createTheme({ palette: { primary: { main: colors.primary } } }).palette.primary
        : null;
    const augmentedSecondary = colors.secondary
        ? createTheme({ palette: { secondary: { main: colors.secondary } } }).palette.secondary
        : null;

    const handleColorChange = (name: keyof ColorInput, value: string) => {
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
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
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
            </Box>
        </Box>
    );
};

export default App;