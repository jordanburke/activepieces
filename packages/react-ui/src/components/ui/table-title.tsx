import { BetaBadge } from '@/components/custom/beta-badge';

export const TableTitle = ({
  children,
  description,
  beta = false,
}: {
  children: React.ReactNode;
  description?: React.ReactNode;
  beta?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">{children}</h1>
          {beta && <BetaBadge />}
        </div>
        {description && (
          <span className="text-md text-muted-foreground">{description}</span>
        )}
      </div>
    </div>
  );
};
TableTitle.displayName = 'TableTitle';
