import { useNavigate } from "react-router-dom";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <div className="flex flex-col items-center space-y-6">
          <ApperIcon 
            name="AlertCircle" 
            size={80} 
            className="text-error"
          />
          <div>
            <h1 className="text-4xl font-display text-gray-800 mb-2">
              404
            </h1>
            <h2 className="text-2xl font-display text-gray-700 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>
          <Button 
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/90"
          >
            <ApperIcon name="Home" size={20} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default NotFound;