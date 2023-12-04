using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieTutorial.Default.GenreRow>;
using MyRow = MovieTutorial.Default.GenreRow;

namespace MovieTutorial.Default;

public interface IGenreListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class GenreListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGenreListHandler
{
    public GenreListHandler(IRequestContext context)
            : base(context)
    {
    }
}