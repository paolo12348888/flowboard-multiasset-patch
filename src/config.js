// Configurazione centrale. Tutto ciò che è "tarabile" vive qui, nulla è sparso nel codice.

export const CONFIG = {
  
  symbol: 'BTCUSDT',
  
  // Binance USDⓈ-M Futures (dati pubblici, nessuna chiave API).
  
  // Se il tuo paese è geo-bloccato (HTTP 451) cambia host o usa un proxy.
  
  rest: 'https://fapi.binance.com',
  
  ws: 'wss://fstream.binance.com/stream',
  

  
  defaultTf: 10,            // minuti; qualsiasi N è ammesso (si aggrega dalle candele a 1m)
  
  timeframes: [1, 5, 10, 15, 30, 60],
  

  
  // Soglia "lotto grande" in USD nozionali per singolo aggTrade (indipendente dall'asset: ?lot=250000 per cambiarla).
  
  largeLotUsd: 150_000,
  
  // Ancoraggio del VWAP: 'utc' (crypto) | 'us' (apertura cash USA 09:30 NY, per indici/azioni) | 'HH:MM' UTC. URL: ?session=us
  
  session: 'utc',
  
  flow: { windowsMin: [1, 5, 15], blend: [0.25, 0.5, 0.25] },
  
  cvdWindowMin: 30,
  
  book: { levels: 20, decayBps: 8, emaAlpha: 0.2 },
  
  oiWindowMin: 5,
  

  
  // Pesi del punteggio composito (si rinormalizzano se una componente manca).
  
  weights: { flow: 0.30, large: 0.10, cvd: 0.15, obi: 0.15, vwap: 0.20, oi: 0.10 },
  

  
  smoothing: 0.12,          // EMA applicata al punteggio a ogni tick (250 ms)
  
  regime: { enter: 0.15, exit: 0.05 }, // isteresi per evitare flicker del verdetto
  
  tickMs: 250,
  
};


























