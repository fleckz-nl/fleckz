export default () => (
  <main className="bg-primary">
    <style
      dangerouslySetInnerHTML={{
        __html: `
              html, body {
                margin: 0;
              }
              html * {
                box-sizing: border-box;
              }
              main {
                display: flex;
                align-items: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
                text-align: center;
                background-color: #E2E8F0;
                height: 100vh;
              }
              section {
                background-color: white;
                border-radius: 0.25rem;
                width: 32rem;
                padding: 1rem;
                margin: 0 auto;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
              }
              h1 {
                font-size: 2rem;
                margin: 0;
                font-weight: 500;
                line-height: 1;
                color: #2D3748;
              }
            `,
      }}
    />
    <section className="relative flex min-h-screen items-center justify-center bg-transparent p-2">
      <img
        src="https://picsum.photos/800?random"
        alt=""
        className="rounded-full blur-md brightness-50 drop-shadow-sm grayscale transition-all hover:blur-0"
      />
      <div className="absolute flex flex-col break-words px-10 brightness-150">
        <span className="text-3xl font-light text-accent/50 md:text-6xl">
          404
        </span>
        <span className="text-center text-xl text-muted md:text-4xl">
          Pagina niet gevonden
        </span>
        <p className="text-lg font-semibold text-accent">
          Helaas bestaat de pagina die u zocht niet.
        </p>
      </div>
    </section>
  </main>
)
