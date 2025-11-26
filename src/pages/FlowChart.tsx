import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";

const FlowChart = () => {
  const downloadPNG = () => {
    const link = document.createElement("a");
    link.href = "/flowchart.png"; // ensure PNG exists in /public
    link.download = "Flowchart.png";
    link.click();
  };

  return (
    <div className="container mx-auto py-24 px-4">

      {/* Breadcrumbs */}
      {/* <div className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:underline">Home</Link> /
        <span className="text-foreground"> Flow Chart</span>
      </div> */}

      {/* Back + PNG Button */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>

        <Button
          onClick={downloadPNG}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ImageIcon className="w-4 h-4" />
          PNG
        </Button>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-foreground">Flow Chart</h1>

      {/* Image Preview — same as original, neat & centered */}
      <div
        className="
          glass border border-border rounded-2xl shadow-xl
          mx-auto w-full max-w-[1700px] p-6
        "
      >
        <img
          src="/flowchart.png"
          alt="Flow Chart"
          className="
            rounded-xl mx-auto shadow-lg 
            w-full h-auto 
            object-contain 
            dark:brightness-90
          "
        />
      </div>
    </div>
  );
};

export default FlowChart;
