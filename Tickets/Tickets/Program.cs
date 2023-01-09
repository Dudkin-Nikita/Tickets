using Microsoft.EntityFrameworkCore;
using Tickets.Domain.Entities;
using Tickets.Domain.Repositories;
using Tickets.Domain.Repositories.Abstract;
using Tickets.Domain.Repositories.EntityFramework;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors();
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddTransient<IRepository<ClassicTicket>, EFClassicTicketsRepository>();
builder.Services.AddTransient<IRepository<OpenAirTicket>, EFOpenAirTicketsRepository>();
builder.Services.AddTransient<IRepository<PartyTicket>, EFPartyTicketsRepository>();
builder.Services.AddTransient<DataManager>();

var app = builder.Build();
app.UseCors(builder => builder.AllowAnyOrigin());

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
