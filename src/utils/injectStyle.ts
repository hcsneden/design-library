const injectedIds = new Set<string>()

export const injectStyle = (id: string, css: string): void => {
  if (typeof document === 'undefined' || injectedIds.has(id)) return
  const style = document.createElement('style')
  style.setAttribute('data-dl', id)
  style.textContent = css
  document.head.appendChild(style)
  injectedIds.add(id)
}
