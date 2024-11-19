export const formatCurrency = (
  valor,
  localidade = "pt-BR",
  casasDecimais = 2
) => {
  return valor.toLocaleString(localidade, {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: casasDecimais,
    maximumFractionDigits: casasDecimais,
  });
};
