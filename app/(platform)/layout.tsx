import { ClerkProvider } from "@clerk/nextjs";

const platformLayout = ({ children }: { children: React.ReactNode }) => {
  <ClerkProvider>{children}</ClerkProvider>;
};

export default platformLayout;
