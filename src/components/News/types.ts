export interface NewsProps {
  img: string;
  title: string;
  content: string;
  author: string;
  borderDirection?: "Right" | "Bottom";
  smaller?: boolean;
}
