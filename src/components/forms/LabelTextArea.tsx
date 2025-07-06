import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface LabelTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

const LabelTextarea = ({ label, error, className, id, name, ...props }: LabelTextareaProps) => {
  const generatedId = id || name || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="relative grid w-full items-start gap-2">
      <Label htmlFor={generatedId}>{label}</Label>
      <Textarea
        id={generatedId}
        name={name}
        className={`${error ? 'border-destructive' : ''} ${className}`}
        {...props}
      />
      {error && <span className="text-destructive absolute -bottom-4 text-xs">{error}</span>}
    </div>
  )
}

export default LabelTextarea
