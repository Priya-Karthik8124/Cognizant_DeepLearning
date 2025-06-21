package week_1;
public class FinancialForecasting {
    public static void main(String[] args) {
        double presentValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = calculateFutureValue(presentValue, growthRate, years);
        System.out.println("Predicted future value after " + years + " years: ₹" + futureValue);
    }

    public static double calculateFutureValue(double value, double rate, int years) {
        if (years == 0) {
            return value;
        }
        return calculateFutureValue(value, rate, years - 1) * (1 + rate);
    }
}
