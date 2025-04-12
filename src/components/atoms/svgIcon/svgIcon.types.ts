import { FC, SVGProps } from "react"

export interface SvgIconProps {
    Icon: FC<SVGProps<SVGSVGElement>>,
    $width?: number,
    $height?: number
}

export interface IconProps {
    $width?: number,
    $height?: number
}
