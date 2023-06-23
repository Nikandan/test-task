using Microsoft.AspNetCore.Mvc;
using TestTaskAPI.Controllers;

namespace TestTaskUnitTest
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
           var result1 = new AddController().Add(new TestTaskAPI.AddDto {NumberA = 6, NumberB = 4 });
           var result2 = new AddController().Add(new TestTaskAPI.AddDto {NumberA = 6.6M, NumberB = 4.24M });
           var result3 = new AddController().Add(new TestTaskAPI.AddDto {NumberA = 6, NumberB = 4.24M });
            Assert.AreEqual(10, result1.Result);
            Assert.AreEqual(10.84, result2.Result);
            Assert.AreEqual(10.24, result3.Result);
        }
    }
}