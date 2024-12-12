// Tipagem
import { QueriesItems } from "@/types/queries";

export const SalesQueries = ({
  dateInit,
  dateEnd,
  year,
  month,
  company,
  sellersSurname,
  brands,
  idSeller,
  idSellers,
}: QueriesItems) => {
  const formattedIdBrands = Array.isArray(brands)
    ? brands.map((brands) => `'${brands}'`).join(", ")
    : "";

  const sellerFilter =
    idSeller || sellersSurname
      ? `AND (fnc.id_pss = ${idSeller ? `'${idSeller}'` : "?"} 
     OR fnc.apelido_pss LIKE ${
       sellersSurname
         ? `'%${
             sellersSurname === "mikaele"
               ? "MIKAELE SANTANA"
               : sellersSurname === "ana_carolina"
               ? "CAROLINA"
               : sellersSurname === "LUCAS V"
               ? "RODRIGUES"
               : sellersSurname
           }%'`
         : "?"
     })`
      : "";

  let sales = `select fnc.apelido_pss AS vendedor, SUM(sdi.valor_liquido_sdi) AS VALOR_LIQUIDO , sum(ale.preco_custo_ale * sdi.qtde_sdi) as valor_custo,
  SUM(sdi.valor_liquido_sdi) - sum(ale.preco_custo_ale * sdi.qtde_sdi) as valor_lucro
      FROM saidas_itens sdi 
      INNER JOIN produtos prd ON prd.id_prd = sdi.id_prd 
      INNER JOIN saidas sds ON sds.id_sds = sdi.id_sds
      INNER JOIN almoxarifados_estoque ale ON ale.id_prd = sdi.id_prd AND ale.id_alm = sdi.id_alm  
      INNER JOIN v_funcionarios_consulta fnc ON fnc.id_pss = COALESCE(sdi.id_pss, sds.id_fnc)  
      INNER JOIN empresas emp ON emp.id_emp = sds.id_emp 
      LEFT JOIN fornecedores_produtos frp ON frp.id_prd = prd.id_prd AND frp.nivel_frp = 'P' 
      WHERE sds.status_sds = '2'  
      AND sds.datahora_finalizacao_sds BETWEEN '${dateInit} 00:00:00' AND '${dateEnd} 23:59:59' 
      AND sds.id_emp IN (${company}) 
      AND sds.tipo_sds = '4'  
      AND sdi.id_tbl IN (1, 2) 
      ${sellerFilter} 
      GROUP BY fnc.apelido_pss`;

  let commissionPerSalesPerson = `select sds.id_emp AS id_empresa, fnc.apelido_pss, COALESCE(sdi.id_pss, sds.id_fnc) as id_vendedor, fnc.apelido_pss as vendedor, CASE COALESCE(sdi.id_tbl, sds.id_tbl) WHEN 1 THEN 
  perc_comissao_ale WHEN 2 THEN perc_comissao2_ale WHEN 3 THEN perc_comissao3_ale ELSE 0.00 END AS perc_comissao, sdi.valor_liquido_sdi * CASE COALESCE(sdi.id_tbl, sds.id_tbl) WHEN 1 THEN perc_comissao_ale WHEN 2 
  THEN perc_comissao2_ale WHEN 3 THEN perc_comissao3_ale ELSE 0.00 END /100 as comissao from saidas_itens sdi inner join produtos prd on prd.id_prd = sdi.id_prd inner join saidas sds on sds.id_sds = sdi.id_sds inner 
  join almoxarifados_estoque ale on ale.id_prd = sdi.id_prd and ale.id_alm = sdi.id_alm inner join v_funcionarios_consulta fnc on fnc.id_pss = COALESCE(sdi.id_pss, sds.id_fnc) inner join empresas emp on emp.id_emp = 
  sds.id_emp left join fornecedores_produtos frp on frp.id_prd = prd.id_prd AND frp.nivel_frp = 'P' where sds.status_sds = '2' and sds.datahora_finalizacao_sds BETWEEN '${dateInit} 00:00:00' AND '${dateEnd} 23:59:59' 
  and sds.id_emp in (1, 2, 3) AND sds.tipo_sds = '4' and sdi.id_tbl in (1, 2) and fnc.apelido_pss like '%${
    sellersSurname === "LUCAS V"
      ? "RODRIGUES"
      : sellersSurname === "ana_carolina"
      ? "CAROLINA"
      : sellersSurname
  }%'`;

  let topClientsPlusBuy = `select ${
    sellersSurname && idSeller ? "fnc.ID_PSS AS id_vendedor," : ""
  } pss.id_pss AS id_cliente, TRIM(pss.nome_pss) AS nome_cliente, SUM(sdi.valor_liquido_sdi) AS valor_liquido FROM saidas sds INNER JOIN saidas_itens sdi ON 
  sdi.id_sds = sds.id_sds INNER JOIN pessoas pss ON pss.id_pss = sds.id_pss INNER JOIN produtos prd ON prd.id_prd = sdi.id_prd INNER JOIN pessoas fnc ON fnc.id_pss = sds.id_fnc LEFT JOIN fornecedores_produtos frp ON
  (frp.id_prd = prd.id_prd AND frp.nivel_frp = 'P') LEFT JOIN pessoas frnc ON frnc.id_pss = frp.id_pss WHERE  sds.datahora_finalizacao_sds BETWEEN TIMESTAMP '${dateInit} 00:00:00' AND '${dateEnd} 23:59:59' AND 
  sds.TIPO_SDS IN ('4', '5', '9')  AND sds.status_sds IN ('2') AND sds.ID_EMP IN (${company}) ${
    sellersSurname
      ? `AND fnc.APELIDO_PSS LIKE '%${
          sellersSurname === "LUCAS V"
            ? "RODRIGUES"
            : sellersSurname === "ana_carolina"
            ? "CAROLINA"
            : sellersSurname
        }%'`
      : ""
  } ${idSeller ? `AND fnc.ID_PSS = '${idSeller}'` : ""} GROUP BY ${
    sellersSurname && idSeller ? "fnc.ID_PSS, " : ""
  } pss.id_pss, TRIM(pss.nome_pss) ORDER BY valor_liquido DESC rows 10`;

  return { sales, commissionPerSalesPerson, topClientsPlusBuy };
};
