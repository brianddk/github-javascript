# https://gist.github.com/alastorid/655787d66cf8ac05bd8dc30b95e4dbfd
param (
    [string]$FileName
)

Add-Type -TypeDefinition @"
using System;
using System.Text;
using System.Runtime.InteropServices;
public class sign
{
   [DllImport("Imagehlp.dll")]
   static extern bool ImageEnumerateCertificates(IntPtr hFile, uint wTypeFilter, ref uint dwCertCount, IntPtr pIndices, IntPtr pIndexCount);

   [DllImport("Imagehlp.dll")]
   static extern bool ImageRemoveCertificate(IntPtr hFile, uint dwCertCount);

   const uint CERT_SECTION_TYPE_ANY = 255;
   public static void remove(string file)
   {
      using (System.IO.FileStream fs = new System.IO.FileStream(file, System.IO.FileMode.Open, System.IO.FileAccess.ReadWrite))
      {
         IntPtr h = fs.SafeFileHandle.DangerousGetHandle();
         uint certCount = 0;
         if(ImageEnumerateCertificates(h, CERT_SECTION_TYPE_ANY, ref certCount, IntPtr.Zero, IntPtr.Zero))
         {
            for(uint i=0; i<certCount; ++i)
            {
               ImageRemoveCertificate(h, i);
            }
         }
      }
   }
}
"@

[sign]::remove($FileName)
