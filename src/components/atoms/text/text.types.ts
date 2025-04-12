import React from 'react';

export interface TextProps {
    content: string;
    $fontWeight: string;
    $fontSize: string;
    $specialFont?: boolean;
    $margin: number;
    $background?: boolean;
    $color?: string;
    $marginLeft?: number;
    $pointer?: boolean;
    $center?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $refText?: React.RefObject<any>;
    $click?: () => void;
}
