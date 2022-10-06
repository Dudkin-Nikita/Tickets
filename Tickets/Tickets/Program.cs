using Microsoft.EntityFrameworkCore;
using Tickets.Domain.Repositories;
using Tickets.Domain.Repositories.Abstract;
using Tickets.Domain.Repositories.EntityFramework;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddTransient<IClassicTicketsRepository, EFClassicTicketsRepository>();
builder.Services.AddTransient<IOpenAirTicketsRepository, EFOpenAirTicketsRepository>();
builder.Services.AddTransient<IPartyTicketsRepository, EFPartyTicketsRepository>();
builder.Services.AddTransient<DataManager>();

var app = builder.Build();

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
