import React from 'react';
import ReactDOM from 'react-dom/client';

let globalHandlersInstalled = false;
let fallbackShown = false;

/**
 * Safely mount a React component with error handling and fallback UI.
 * If mounting fails or #root is missing, displays an on-page error message.
 * Also installs global error handlers to catch runtime errors and unhandled promise rejections.
 */
export function safeMount(component: React.ReactElement): void {
  if (globalHandlersInstalled) {
    return;
  }
  
  installGlobalErrorHandlers();
  globalHandlersInstalled = true;

  try {
    const rootElement = document.getElementById('root');
    
    if (!rootElement) {
      showFallbackError('Application container not found.', null);
      return;
    }

    ReactDOM.createRoot(rootElement).render(component);
  } catch (error) {
    console.error('Failed to mount React application:', error);
    showFallbackError('Failed to load the application.', error);
  }
}

/**
 * Install global handlers for uncaught errors and unhandled promise rejections.
 * These handlers replace the UI with the same fallback error screen.
 */
function installGlobalErrorHandlers(): void {
  window.onerror = (message, source, lineno, colno, error) => {
    console.error('Global error caught:', { message, source, lineno, colno, error });
    showFallbackError('An unexpected error occurred.', error || message);
    return true;
  };

  window.onunhandledrejection = (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    showFallbackError('An unexpected error occurred.', event.reason);
    event.preventDefault();
  };
}

function showFallbackError(message: string, error: any): void {
  if (fallbackShown) {
    return;
  }
  fallbackShown = true;

  const sanitizedError = sanitizeError(error);
  const errorDetailsId = 'error-details-' + Date.now();

  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
        background-color: #f9fafb;
      ">
        <div style="
          max-width: 32rem;
          padding: 2rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          text-align: center;
        ">
          <h1 style="
            font-size: 1.5rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 1rem;
          ">Unable to Load Site</h1>
          <p style="
            color: #6b7280;
            margin-bottom: 1.5rem;
          ">${message}</p>
          <p style="
            font-size: 0.875rem;
            color: #9ca3af;
            margin-bottom: 1.5rem;
          ">Please try refreshing the page or contact support if the problem persists.</p>
          
          <button
            onclick="window.location.reload()"
            style="
              background: #002349;
              color: white;
              padding: 0.75rem 1.5rem;
              border-radius: 0.375rem;
              border: none;
              font-weight: 600;
              cursor: pointer;
              font-size: 1rem;
              transition: background 0.2s;
            "
            onmouseover="this.style.background='#003a6e'"
            onmouseout="this.style.background='#002349'"
          >
            Reload Page
          </button>

          ${sanitizedError ? `
            <details style="margin-top: 1.5rem; text-align: left;">
              <summary style="
                cursor: pointer;
                font-size: 0.875rem;
                color: #6b7280;
                padding: 0.5rem;
                border-radius: 0.25rem;
                user-select: none;
              ">
                Technical details
              </summary>
              <pre id="${errorDetailsId}" style="
                margin-top: 0.75rem;
                padding: 1rem;
                background: #f3f4f6;
                border-radius: 0.375rem;
                font-size: 0.75rem;
                color: #374151;
                overflow-x: auto;
                white-space: pre-wrap;
                word-break: break-word;
              ">${sanitizedError}</pre>
            </details>
          ` : ''}
        </div>
      </div>
    `;
  } else {
    document.body.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
        background-color: #f9fafb;
      ">
        <div style="
          max-width: 32rem;
          padding: 2rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          text-align: center;
        ">
          <h1 style="
            font-size: 1.5rem;
            font-weight: 600;
            color: #111827;
            margin-bottom: 1rem;
          ">Unable to Load Site</h1>
          <p style="
            color: #6b7280;
            margin-bottom: 1.5rem;
          ">${message}</p>
          <p style="
            font-size: 0.875rem;
            color: #9ca3af;
            margin-bottom: 1.5rem;
          ">Please try refreshing the page or contact support if the problem persists.</p>
          
          <button
            onclick="window.location.reload()"
            style="
              background: #002349;
              color: white;
              padding: 0.75rem 1.5rem;
              border-radius: 0.375rem;
              border: none;
              font-weight: 600;
              cursor: pointer;
              font-size: 1rem;
              transition: background 0.2s;
            "
            onmouseover="this.style.background='#003a6e'"
            onmouseout="this.style.background='#002349'"
          >
            Reload Page
          </button>

          ${sanitizedError ? `
            <details style="margin-top: 1.5rem; text-align: left;">
              <summary style="
                cursor: pointer;
                font-size: 0.875rem;
                color: #6b7280;
                padding: 0.5rem;
                border-radius: 0.25rem;
                user-select: none;
              ">
                Technical details
              </summary>
              <pre id="${errorDetailsId}" style="
                margin-top: 0.75rem;
                padding: 1rem;
                background: #f3f4f6;
                border-radius: 0.375rem;
                font-size: 0.75rem;
                color: #374151;
                overflow-x: auto;
                white-space: pre-wrap;
                word-break: break-word;
              ">${sanitizedError}</pre>
            </details>
          ` : ''}
        </div>
      </div>
    `;
  }
}

function sanitizeError(error: any): string {
  if (!error) {
    return '';
  }

  try {
    if (error instanceof Error) {
      return `${error.name}: ${error.message}\n${error.stack || ''}`;
    }
    
    if (typeof error === 'string') {
      return error;
    }
    
    if (typeof error === 'object') {
      return JSON.stringify(error, null, 2);
    }
    
    return String(error);
  } catch (e) {
    return 'Error details unavailable';
  }
}
