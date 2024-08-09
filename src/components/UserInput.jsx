export default function UserInput({ handleChange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial investment</label>
          <input
            required
            type="number"
            name="initial-investment"
            value={input.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual investment</label>
          <input
            required
            type="number"
            name="annual-investment"
            value={input.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected return</label>
          <input
            required
            type="number"
            value={input.expectedReturn}
            name="expected-return"
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            required
            type="number"
            onChange={(e) => handleChange("duration", e.target.value)}
            value={input.duration}
            name="duration"
          />
        </p>
      </div>
    </section>
  );
}
