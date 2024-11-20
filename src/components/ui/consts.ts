import { Color, Size, Variant, Weight } from '@components/ui/index.ts';

export const sizes = [Size.XS, Size.SM, Size.MD, Size.LG, Size.XL] as const;

export const variants = [
  Variant.Default,
  Variant.Primary,
  Variant.Secondary,
  Variant.Accent,
] as const;

export const colors = [
  Color.Default,
  Color.Primary,
  Color.Secondary,
  Color.Accent,
  Color.Error,
  Color.Success,
] as const;

export const weights = [
  Weight.Thin,
  Weight.ExtraLight,
  Weight.Light,
  Weight.Regular,
  Weight.Medium,
  Weight.SemiBold,
  Weight.Bold,
] as const;
