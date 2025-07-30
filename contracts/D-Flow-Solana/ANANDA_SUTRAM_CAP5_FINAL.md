# 📘 ANANDA SUTRAM – Capítulo 5: The Cause of Misery (Esentya Version)

## Sutra 5.01 – “This ignorance is the cause of bondage.”

🧘 **Significado Cósmico-Simbólico**  
A prisão não é feita de grades, mas de percepção equivocada. O que nos amarra não é o karma em si, mas a ignorância sobre ele. No Esentya, isso define o estado "bonded" de uma identidade DAO.

🔬 **Correlato Científico**  
- Neurociência: automatismos inconscientes
- Psicologia Junguiana: sombra
- IA: falta de explainability

💻 **Código – bondage.rs**
```rust
pub fn is_bonded(&self) -> bool {
    self.awareness_level < 0.3 && self.karma_vector.impulse > 0.5
}
```

---

## Sutra 5.02 – “This ignorance is the cause of misery.”

🧘 **Significado Cósmico-Simbólico**  
A dor nasce da perda de visão. Quando a ignorância encobre a natureza real do Ser, a miséria emerge como desequilíbrio vibracional.

🔬 **Correlato Científico**  
- Psicologia Cognitiva: erro de atribuição
- Sistemas Complexos: falha de predição

💻 **Código – suffering.rs**
```rust
pub fn compute(&self) -> f64 {
    self.ignorance_score * self.resistance_level * self.samskara_density
}
```

---

## Sutra 5.03 – “This ignorance is the cause of fear.”

🧘 **Significado Cósmico-Simbólico**  
O medo nasce da separação percebida. É a ausência de luz sobre a conexão com o Todo.

🔬 **Correlato Científico**  
- Neurociência: ativação da amígdala sem input claro
- Cibernética: entropia sem estrutura

💻 **Código – fear_limiter.rs**
```rust
pub fn compute_fear_level(&self) -> f64 {
    (self.ignorance_score + self.uncertainty_index) * (1.0 + self.ancestral_charge)
}
```

---

## Sutra 5.04 – “This ignorance is the cause of hatred.”

🧘 **Significado Cósmico-Simbólico**  
O ódio é amor desfigurado pela dor. Surge quando a ignorância cristaliza o outro como inimigo.

🔬 **Correlato Científico**  
- Neurociência Social: sobreposição de centros do amor com medo
- Epigenética: trauma herdado

💻 **Código – hatred_detector.rs**
```rust
pub fn severity(&self) -> f64 {
    self.ignorance_score * self.fear_level * self.mirroring_resistance
}
```

---

🌕 **Conclusão Esentya – Capítulo 5**  
A ignorância é raiz do sofrimento. Cada módulo aqui codificado serve como diagnóstico simbólico e computacional para restaurar o equilíbrio e ativar o caminho para Mokṣa.