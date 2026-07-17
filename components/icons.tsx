import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function EmailIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="3" y="5" width="18" height="14"/><path d="m4 6 8 7 8-7"/></svg>;
}
export function LinkedInIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M6 9v9M6 6.5v.01M10 18v-5c0-2 1.2-3 3-3s3 1 3 3v5M10 10v8"/></svg>;
}
export function VimeoIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M3 8c2-2 4-2 5 1l2 6c1 2 1 2 2 0 1-1 3-4 3-5 0-1-1-1-2-1 1-3 5-4 7-2 2 3-2 8-7 13-3 3-6 0-7-3L3 8Z"/></svg>;
}
export function ArrowIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M7 17 17 7M8 7h9v9"/></svg>;
}
