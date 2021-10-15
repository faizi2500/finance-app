import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import CompanyTop from './CompanyTop';
import CompanyBanner from './CompanyBanner';
import FinanceHeading from './FinanceHeading';
import FinanceSection from './FinanceSection';

const CompanyPage = ({ info, symbol }) => {
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
                <div key={id} className="color-financials">
                  <FinanceSection eachObj={elem} indexValue={index} />
                </div>
              );
            })}
          </>
        )
        : (
          <div className="beingLoaded">
            <FaSpinner className="rotateSpinner" />
          </div>
        )}
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
