﻿using FluentAssertions;
using Xunit;

namespace PaintedProsthetics.Web.Client.Tests
{
    public class FooTest
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
