'use client'

import { useState, useEffect, useRef } from 'react'

interface UseAutoSaveOptions<T> {
  data: T
  onSave: (data: T) => void
  interval?: number
  debounce?: number
}

export function useAutoSave<T>({
  data,
  onSave,
  interval = 60000, // 30 seconds default
  debounce = 10000, // 1 second debounce
}: UseAutoSaveOptions<T>) {
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [saving, setSaving] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const dataRef = useRef(data)

  // Update the ref when data changes
  useEffect(() => {
    dataRef.current = data
  }, [data])

  // Setup debounced save
  const debouncedSave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setSaving(true)
      onSave(dataRef.current)
      setLastSaved(new Date())
      setSaving(false)
    }, debounce)
  }

  // Setup interval save
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSaving(true)
      onSave(dataRef.current)
      setLastSaved(new Date())
      setSaving(false)
    }, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [interval, onSave])

  // Trigger save on data change
  useEffect(() => {
    debouncedSave()
  }, [data])

  return { lastSaved, saving }
}
