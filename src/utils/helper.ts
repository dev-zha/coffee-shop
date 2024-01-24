export function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

function formatPrice(price: number): string {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'MMK',
    // minimumFractionDigits: 2,
  });
}

export const priceWithSign = (price: number) => `${formatPrice(price)}`;

export function getSumFromArr(numberArr: number[]): number {
  return numberArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

export const fakeTimer = (milliseconds: number = 1000): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};
