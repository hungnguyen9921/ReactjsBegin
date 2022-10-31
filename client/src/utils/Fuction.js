export const convertPrice = (Price) => {
    if (Price) {
        const priceArray = Price.split('');
        const priceLength = Math.ceil(priceArray.length / 3);
        let Thousands = [];
        let Hundred = [];

        for (var i = 0; i < priceLength; i++) {
            if (i === 0) {
                const Temp = priceArray.slice(-3 * (i + 1)).join('');
                Thousands.push(Temp);
            }

            if (0 < i && i <= priceLength) {
                const Temp = priceArray.slice(-3 * (i + 1), -3 * i).join('');
                Hundred.push(Temp);
            }
        }

        const Hundreds = Hundred.filter((i) => {
            return i !== '';
        });

        Hundreds.unshift('');

        let priceCovenrt = `${Hundreds.reverse().join('.')}${Thousands.join()}`;
        return priceCovenrt;
    }
    return Price;
};
