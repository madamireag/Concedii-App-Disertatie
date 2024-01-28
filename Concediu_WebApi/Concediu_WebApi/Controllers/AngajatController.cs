﻿using Concediu_WebApi.Models;
using Concediu_WebApi.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Concediu_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AngajatController : ControllerBase
    {

        private readonly ILogger<AngajatController> _logger;
        private readonly BreakingBreadContext _context;
        public AngajatController(ILogger<AngajatController> logger, BreakingBreadContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("GetNrAngajati")]
        public int GetNrAngajati(int id, bool esteAdmin)
        {
            if (esteAdmin == false)
            {
                return _context.Angajats.Select(x => x).Where(x=>x.ManagerId == id).Count();
            }
            else
            {
                return _context.Angajats.Count();
            }
        }

        [HttpGet("GetAngajati")]
        public List<Angajat> GetAngajati(int position, int id, bool esteAdmin)
        {
            if (esteAdmin == false)
            {
                var nextPage = _context.Angajats.Select(x => x).Where(x => x.ManagerId == id).OrderBy(x => x.Id).Skip(position).Take(15).ToList();
                return nextPage;
            }
            else
            {
                var nextPage = _context.Angajats.Select(x => x).OrderBy(x => x.Id).Skip(position).Take(15).ToList();

                return nextPage;
            }
            
        }

        [HttpGet("GetTotiAngajatii")]
        public DateAngajati GetTotiAngajatii(int position, string? query)
        {
            if (string.IsNullOrEmpty(query))
            {
                List<Angajat> listaAngajati = _context.Angajats.Select(x => x).OrderBy(x => x.Id).Skip(position).Take(12).ToList();
                int nrAngajati = _context.Angajats.Select(x => x).OrderBy(x => x.Id).Count();

                DateAngajati dateAngajati = new DateAngajati(listaAngajati, nrAngajati);

                return dateAngajati;
            }
            else
            {
                List<Angajat> listaAngajati = _context.Angajats.Select(x => x).OrderBy(x => x.Id).Where(x => EF.Functions.Like(x.Nume, (query + '%')) || EF.Functions.Like(x.Prenume, (query + '%')) || EF.Functions.Like(x.Nume + " " + x.Prenume, (query + '%'))).Skip(position).Take(12).ToList();
                int nrAngajati = _context.Angajats.Select(x => x).OrderBy(x => x.Id).Where(x => EF.Functions.Like(x.Nume, (query + '%')) || EF.Functions.Like(x.Prenume, (query + '%')) || EF.Functions.Like(x.Nume + " " + x.Prenume, (query + '%'))).Count();

                DateAngajati dateAngajati = new DateAngajati(listaAngajati, nrAngajati);

                return dateAngajati;
            }
        }

        [HttpGet("GetAngajat")]
        public Angajat GetAngajat(int IdAngajat)
        {
            Angajat t = new Angajat();
            t = _context.Angajats.Select(x => x).Where(x => x.Id == IdAngajat).FirstOrDefault();
            return t;
        }
        [HttpGet("GetAngajatFull")]
        public Angajat GetAngajatFull(int IdAngajat)
        {
            Angajat t = new Angajat();
            t = _context.Angajats.
                Include(x => x.ConcediuAngajats).ThenInclude(s => s.TipConcediu).
                Include(x => x.ConcediuAngajats).ThenInclude(s => s.StareConcediu).
                Include(x => x.ConcediuAngajats).ThenInclude(s => s.Inlocuitor).
                Include(x => x.ConcediuInlocuitors).ThenInclude(s => s.TipConcediu).
                Include(x => x.ConcediuInlocuitors).ThenInclude(s => s.StareConcediu).
                Include(x => x.ConcediuInlocuitors).ThenInclude(s => s.Angajat).
                Select(x => x).
                Where(x => x.Id == IdAngajat).
                FirstOrDefault();
            return t;
        }
        [HttpGet("GetAngajatiFull")]
        public List<Angajat> GetAngajatiFull()
        {
            


            return _context.Angajats.
                   Include(x => x.ConcediuAngajats).ThenInclude(s => s.TipConcediu).
                   Include(x => x.ConcediuAngajats).ThenInclude(s => s.StareConcediu).
                   Include(x => x.ConcediuAngajats).ThenInclude(s => s.Inlocuitor).
                   Include(x => x.ConcediuInlocuitors).ThenInclude(s => s.TipConcediu).
                   Include(x => x.ConcediuInlocuitors).ThenInclude(s => s.StareConcediu).
                   Include(x => x.ConcediuInlocuitors).ThenInclude(s => s.Angajat).
                   Select(x => x).
                   ToList();


        }
        [HttpPut("UpdateAngajat")]
        public void UpdateAngajat([FromBody]Angajat angajat)
        {
            Angajat t = new Angajat();
            t = GetAngajat(angajat.Id);
            t.ManagerId = angajat.ManagerId;
          
            t.Manager = GetAngajat((int)t.ManagerId);
            /*Add methods for Lists
               public virtual ICollection<Concediu> ConcediuAngajats { get; set; }
        public virtual ICollection<Concediu> ConcediuInlocuitors { get; set; }
        public virtual ICollection<Angajat> InverseManager { get; set; } */
            _context.SaveChanges();
        }

    
    }   
    
}
