import { useState, useRef, useEffect, memo } from "react";

const WIDTH = 800;
const HEIGHT = 600;

// Область построения на комплексной плоскости
const X_MIN = -2.5,
  X_MAX = 1.0;
const Y_MIN = -1.2,
  Y_MAX = 1.2;

// memo: если пропсы не изменились — Mandelbrot не ререндерится,
// useEffect не срабатывает и лагов от кликера больше нет
const Mandelbrot = memo(function Mandelbrot({ iterations, onStats }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = ctx.createImageData(WIDTH, HEIGHT);
    const data = img.data;
    let insideCount = 0;

    for (let px = 0; px < WIDTH; px++) {
      for (let py = 0; py < HEIGHT; py++) {
        // Перевод пикселей в комплексную плоскость
        const x0 = X_MIN + (px / WIDTH) * (X_MAX - X_MIN);
        const y0 = Y_MIN + (py / HEIGHT) * (Y_MAX - Y_MIN);

        let x = 0,
          y = 0,
          i = 0;
        while (x * x + y * y <= 4 && i < iterations) {
          const xt = x * x - y * y + x0;
          y = 2 * x * y + y0;
          x = xt;
          i++;
        }

        const idx = (py * WIDTH + px) * 4;
        if (i === iterations) {
          // Точка внутри множества — чёрная
          insideCount++;
          data[idx] = 0;
          data[idx + 1] = 0;
          data[idx + 2] = 0;
        } else {
          // Снаружи — градиент по числу итераций
          const t = i / iterations;
          data[idx] = Math.floor(255 * Math.sqrt(t));
          data[idx + 1] = Math.floor(255 * t);
          data[idx + 2] = Math.floor(255 * (1 - t));
        }
        data[idx + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);

    // Итог: сколько пикселей внутри и оценка площади множества
    const windowArea = (X_MAX - X_MIN) * (Y_MAX - Y_MIN);
    const totalPixels = WIDTH * HEIGHT;
    const fractalArea = (insideCount / totalPixels) * windowArea;

    onStats({
      insideCount,
      totalPixels,
      fractalArea,
      fraction: insideCount / totalPixels,
    });
  }, [iterations, onStats]);

  return (
    <canvas
      ref={canvasRef}
      className="fractal-canvas"
      width={WIDTH}
      height={HEIGHT}
    />
  );
});

const HooksuseMemo = () => {
  const [input, setInput] = useState("100");
  const [stats, setStats] = useState(null);
  const [count, setCount] = useState(0);

  // Валидация на лету: пусто или мусор — считаем за 1, максимум 5000
  const iterations = Math.max(1, Math.min(5000, parseInt(input, 10) || 1));

  return (
    <div className="hooks-lab">
      <div className="hooks-toolbar">
        <label>
          Итерации:{" "}
          <input
            type="number"
            value={input}
            min="1"
            max="5000"
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button onClick={() => setCount(count + 1)}>
          Нажатий: {count}
        </button>
      </div>

      <Mandelbrot iterations={iterations} onStats={setStats} />

      {stats && (
        <p className="fractal-stats">
          Итог расчёта при {iterations} итерациях: множество Мандельброта
          занимает <b>{stats.insideCount}</b> пикселей из {stats.totalPixels} (
          {(stats.fraction * 100).toFixed(2)}% области построения). Оценка
          площади множества в пределах окна составляет примерно{" "}
          <b>{stats.fractalArea.toFixed(4)}</b> единиц комплексной плоскости.
          Чем больше итераций, тем точнее оценка: известное приближение площади
          всего множества — около 1,506 единиц.
        </p>
      )}
    </div>
  );
};

export default HooksuseMemo;
