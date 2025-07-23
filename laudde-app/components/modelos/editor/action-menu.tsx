import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ActionMenuProps {
  onEdit: (e: React.MouseEvent) => void
  onDelete: (e: React.MouseEvent) => void
}

export default function ActionMenu({ onEdit, onDelete }: ActionMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
          <MoreVertical className="h-5 w-5 text-blue-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onSelect={(e) => {
            // e.preventDefault()
            onEdit(e as unknown as React.MouseEvent)
          }}
        >
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e) => {
            // e.preventDefault()
            onDelete(e as unknown as React.MouseEvent)
          }}
        >
          Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
