import { cn } from "@forge/ui/lib/utils";
// @ts-expect-error - no types for Geist fonts
import { GeistMono } from "geist/font/mono";
// @ts-expect-error - no types for Geist fonts
import { GeistSans } from "geist/font/sans";

export const fonts = cn(
	GeistSans.variable,
	GeistMono.variable,
	"touch-manipulation font-sans antialiased"
);
