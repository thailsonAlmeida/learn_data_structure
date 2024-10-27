using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leran.read_json
{
    internal class Lesson
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Media { get; set; }
        public DateTime Timestamp { get; set; }

        public Lesson()
        {
        }

        public Lesson(int id, string title, string media, DateTime timestamp)
        {
            Id = id;
            Title = title;
            Media = media;
            Timestamp = timestamp;
        }
    }
}
