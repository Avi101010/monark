export function hexToRGB(hex: string) {
    const hexValue = hex.replace('#', '');
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);
    return { r, g, b };
}

export function colorOpacity(hex: string, v: number) {
    const textColorRGB = hexToRGB(hex);
    return `rgba(${textColorRGB.r}, ${textColorRGB.g}, ${textColorRGB.b}, ${v})`
}