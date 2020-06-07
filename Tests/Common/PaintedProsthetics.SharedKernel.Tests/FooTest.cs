using FluentAssertions;

namespace PaintedProsthetics.SharedKernel.Tests
{
    public class FooTest
    {
        public void VerifyAllDependenciesIn()
        {
            "Bar".Should().Be("Bar");
        }
    }
}
