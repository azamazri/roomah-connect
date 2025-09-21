import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CandidateCardProps {
  name: string;
  age: number;
  city: string;
  job: string;
  edu?: string;
  bio?: string;
  badges?: string[];
  readyLabel?: string;
}

export default function CandidateCard({ 
  name, 
  age, 
  city, 
  job, 
  edu, 
  bio, 
  badges, 
  readyLabel = "Siap Ta'aruf" 
}: CandidateCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        {/* Ready Badge */}
        {readyLabel && (
          <div className="mb-4">
            <Badge variant="success" className="text-xs">
              {readyLabel}
            </Badge>
          </div>
        )}

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-surface-1 border-2 border-border flex items-center justify-center">
            <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4">
          <h3 className="font-semibold text-lg text-foreground mb-1">KANDIDAT</h3>
          <p className="text-sm text-muted-foreground">{job}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <div className="text-center">
            <div className="w-2 h-2 rounded-full bg-primary mb-1 mx-auto"></div>
            <div className="text-sm font-medium text-foreground">{age} tahun</div>
            <div className="text-xs text-muted-foreground">{city}</div>
          </div>
          {edu && (
            <div className="text-center">
              <div className="w-2 h-2 rounded-full bg-primary mb-1 mx-auto"></div>
              <div className="text-sm font-medium text-foreground">{edu}</div>
            </div>
          )}
        </div>

        {/* Bio */}
        {bio && (
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground italic">"{bio}"</p>
          </div>
        )}

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {badges.map((badge, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2 p-6 pt-0">
        <Button variant="outline" size="sm" className="flex-1">
          👁️ Lihat CV
        </Button>
        <Button variant="primary" size="sm" className="flex-1">
          💍 Ajukan Ta'aruf
        </Button>
      </CardFooter>
    </Card>
  );
}