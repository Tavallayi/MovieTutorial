using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.Default.GenreRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieTutorial.Default.GenreRow;

namespace MovieTutorial.Default;

public interface IGenreSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class GenreSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreSaveHandler
{
    public GenreSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}