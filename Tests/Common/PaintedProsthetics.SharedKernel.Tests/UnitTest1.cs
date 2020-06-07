using FluentAssertions;
using Xunit;

namespace PaintedProsthetics.SharedKernel.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Test()
        {
            var foo = new Foo();

            var actual = foo.Bar();

            actual.Should().Be("Bar");
        }
    }
}
