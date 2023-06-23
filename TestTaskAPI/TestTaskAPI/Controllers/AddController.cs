using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestTaskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddController : ControllerBase
    {

        public AddController()
        {
        }
        [HttpPost]
        public async Task<decimal>  Add(AddDto dto)
        {
            var sum = dto.NumberA + dto.NumberB;
            return sum;
        }
    }
}
