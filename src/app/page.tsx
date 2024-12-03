import Header from "@components/Header";
import PostForm from "@components/lib/PostForm";
import PostsList from "@components/PostsList";

export default function Home() {
  return (
    <div
      className="w-full h-full flex flex-1 gap-16 font-[var(--font-geist-sans)] "
    >
      <div className="w-1/4">
        <PostForm />
      </div>

      <div className="w-3/4 h-full flex flex-col items-center gap-4">
        <Header />
        <PostsList />
      </div>
    </div>

  );
}
