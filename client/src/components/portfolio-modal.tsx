import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
  } | null;
}

export default function PortfolioModal({ isOpen, onClose, project }: PortfolioModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0" data-testid="modal-portfolio">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-sm text-gold-500 font-medium mb-2">{project.category}</div>
              <h3 className="font-serif text-3xl font-bold text-charcoal-800">{project.title}</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="text-charcoal-600 hover:text-charcoal-800"
              data-testid="button-close-modal"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-xl mb-6"
            data-testid="img-modal-project"
          />
          <div className="text-lg text-charcoal-600 leading-relaxed" data-testid="text-modal-description">
            {project.description}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
