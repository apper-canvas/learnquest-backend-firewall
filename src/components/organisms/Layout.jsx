import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/organisms/Header";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import progressService from "@/services/api/progressService";

function Layout() {
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProgress() {
      try {
        setLoading(true);
        setError(null);
        const data = await progressService.getAll();
        const mathStars = data.find(p => p.subject === "Math")?.stars || 0;
        const readingStars = data.find(p => p.subject === "Reading")?.stars || 0;
        setTotalStars(mathStars + readingStars);
      } catch (err) {
        setError("Failed to load progress data");
      } finally {
        setLoading(false);
      }
    }
    loadProgress();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen bg-background">
      <Header totalStars={totalStars} />
      <Outlet />
    </div>
  );
}

export default Layout;