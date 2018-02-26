using System.Security.Principal;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Feedback.Data.Interfaces;
using Feedback.Data.Logic;
using Feedback.Service;
using Feedback.Service.Interfaces;
using Feedback.Service.Logic;


namespace Feedback.Web
{
    public static class BuildUnityContainer
    {
        public static IServiceCollection RegisterAddTransient(IServiceCollection services)
        {
            services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();
            services.AddTransient<IPrincipal>(
                provider => provider.GetService<IHttpContextAccessor>().HttpContext.User);

            #region Repository
            services.AddTransient<IFeedbackRepository, FeedbackRepository>();
            services.AddTransient<IQuestionRepository, QuestionRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            #endregion

            #region Services
            services.AddTransient<IFeedBackManagerService, FeedBackManagerService>();
            services.AddTransient<IQuestionManagerService, QuestionManagerService>();
            services.AddTransient<IUserService, UserManagerService>();
            #endregion

            return services;
        }
    }
}
