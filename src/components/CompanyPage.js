import React from 'react';
import PropTypes from 'prop-types';
import CompanyTop from './CompanyTop';
import CompanyBanner from './CompanyBanner';
import FinanceHeading from './FinanceHeading';
import FinanceSection from './FinanceSection';

const CompanyPage = ({ info, symbol }) => {
  // console.log(info);
  const companyInformation = info.responseFinancials;
  const companyFinanceInfo = info.responseData;

  const financialList = [];
  if (companyFinanceInfo) {
    companyFinanceInfo.map((each) => {
      const {
        priceEarningsRatioTTM,
        priceCashFlowRatioTTM,
        priceBookValueRatioTTM,
        priceToOperatingCashFlowsRatioTTM,
        receivablesTurnoverTTM,
        returnOnCapitalEmployedTTM,
        shortTermCoverageRatiosTTM,
        returnOnEquityTTM,
        totalDebtToCapitalizationTTM,
        netProfitMarginTTM,
        dividendPerShareTTM,
        currentRatioTTM,
        cashPerShareTTM,
        debtEquityRatioTTM,
        grossProfitMarginTTM,
        fixedAssetTurnoverTTM,
      } = each;
      const financialObj = {
        priceEarningsRatioTTM,
        priceCashFlowRatioTTM,
        priceBookValueRatioTTM,
        priceToOperatingCashFlowsRatioTTM,
        receivablesTurnoverTTM,
        returnOnCapitalEmployedTTM,
        shortTermCoverageRatiosTTM,
        returnOnEquityTTM,
        totalDebtToCapitalizationTTM,
        netProfitMarginTTM,
        dividendPerShareTTM,
        currentRatioTTM,
        cashPerShareTTM,
        debtEquityRatioTTM,
        grossProfitMarginTTM,
        fixedAssetTurnoverTTM,
      };
      Object.entries(financialObj).map((each) => {
        let keyIndex = '';
        let valueIndex = 0;
        each.forEach((val, index) => {
          if (index === 0) {
            keyIndex = val;
          }
          valueIndex = val;
        });
        const obj = {
          [keyIndex]: valueIndex,
        };
        return financialList.push(obj);
      });
      return financialList;
    });
  }
  let newObj;
  if (companyInformation) {
    companyInformation.map((each) => {
      const {
        companyName,
        image,
        exchangeShortName,
        sector,
        price,
        description,
        volAvg,
        website,
      } = each;
      newObj = {
        companyName,
        image,
        exchangeShortName,
        sector,
        price,
        description,
        volAvg,
        website,
      };
      return newObj;
    });
  }
  return (
    <>
      <CompanyTop symbol={symbol} />
      {(newObj)
        ? (
          <>
            <CompanyBanner
              name={newObj.companyName}
              image={newObj.image}
              exchange={newObj.exchangeShortName}
              sector={newObj.sector}
              price={newObj.price}
              description={newObj.description}
              volAvg={newObj.volAvg}
              website={newObj.website}
            />
            <FinanceHeading symbol={symbol} />
            {financialList.map((elem, index) => {
              const id = index + 1;
              return (
                <FinanceSection key={id} eachObj={elem} indexValue={index} />
              );
            })}
          </>
        )
        : (<p>Loading</p>)}
    </>
  );
};

CompanyPage.defaultProps = {
  info: {
    status: false,
  },
};

CompanyPage.propTypes = {
  info: PropTypes.instanceOf(Object),
  symbol: PropTypes.string.isRequired,
};

export default CompanyPage;

// ({
//   symbol,
//   companyName,
//   image,
//   exchangeShortName,
//   sector,
// })
