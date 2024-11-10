export interface getDatasParams<T> {
  API: string // API 경로 (URL)
  params: Record<string, any> // 동적인 key-value 객체
  // setState: React.Dispatch<React.SetStateAction<T>> // useState의 setState 함수
  callback: (result?: Record<string, any>) => void
}