﻿using FluentAssertions;
using Xunit;

namespace PaintedProsthetics.Gallery.Tests
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
