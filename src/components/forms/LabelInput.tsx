import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const LabelInput = ({ label, error, className, ...props }: LabelInputProps) => {
  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={props.name}>{label}</Label>
      <Input id={props.name} className={className} {...props} />
      {error && <span className="text-destructive text-xs">{error}</span>}
    </div>
  )
}

export default LabelInput
