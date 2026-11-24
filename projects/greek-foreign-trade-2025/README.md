# Greek Foreign Trade Analysis — 2025

An exploratory data analysis of Greece's international trade in goods during 2025, examining exports, imports, trading partners, product categories, and the annual trade balance.

## Project Overview

This project analyzes Greece's foreign trade performance throughout 2025 using monthly trade data. The analysis combines two CSV datasets covering January–June and July–December 2025.

The objective is to identify key patterns in Greek exports and imports, understand the country's main trading partners, and examine the product categories that contribute most to trade activity.

## Key Findings

### Annual Trade Balance

| Indicator | Value |
|---|---:|
| Exports | €48.659 billion |
| Imports | €82.475 billion |
| Trade Balance | -€33.816 billion |

Greece recorded a substantial trade deficit in 2025, as imports exceeded exports.

### Monthly Trends

- The trade balance remained negative throughout all 12 months.
- August recorded the smallest monthly trade deficit.
- December recorded the largest monthly trade deficit.

### Trading Partners

The analysis identified the following leading partners:

- **Exports:** Italy was the leading destination.
- **Imports:** Germany was the leading country of origin.
- China was also among Greece's major import partners.

### Product Categories

Mineral products ranked first in both exports and imports by product category.

## Methodology

The analysis followed these steps:

1. Imported and inspected the two CSV datasets.
2. Combined the datasets into one annual dataset.
3. Checked the number of records, reporting periods, and duplicate rows.
4. Classified partner records into countries, special entries, and aggregate groups.
5. Aggregated trade values by month, partner, and product category.
6. Calculated the annual and monthly trade balances.
7. Created visualizations to communicate the findings.

## Tools & Technologies

- Python
- Pandas
- Matplotlib
- Jupyter Notebook
- CSV data

## Project Structure

```text
greek-foreign-trade-2025/
├── greek_foreign_trade_2025.ipynb
├── data-19412973.csv
├── data-19413497.csv
└── README.md
```

## Data Source

Eurostat international trade in goods data.

## Conclusion

The analysis highlights the scale of Greece's trade deficit in 2025 and the importance of understanding trade flows by month, partner country, and product category.

The project demonstrates a practical data analytics workflow, from raw CSV data preparation and aggregation to exploratory analysis and visualization.

## Connect with Me

**Marios Makris — Data Analyst**

- LinkedIn: [Marios Makris](https://www.linkedin.com/in/marios-makris/)
- GitHub: [marios-makris](https://github.com/marios-makris)

**DATA BY MARIOS MAKRIS**
