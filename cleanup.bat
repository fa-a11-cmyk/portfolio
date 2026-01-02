@echo off
REM Clean up repository - remove images and unnecessary files

echo Cleaning up repository...

REM Remove image files
del /s /q "public\logos\*.png" 2>nul
del /s /q "public\logos\*.jpg" 2>nul
del /s /q "public\logos\*.jpeg" 2>nul
del /s /q "public\logos\*.webp" 2>nul
del /s /q "public\logos\*.svg" 2>nul
del /s /q "*.pdf" 2>nul
del /s /q "*.jpeg" 2>nul
del /s /q "types\*.png" 2>nul
del /s /q "types\*.jpg" 2>nul
del /s /q "types\*.webp" 2>nul

REM Remove unnecessary directories
rmdir /s /q ".next" 2>nul
rmdir /s /q ".vercel" 2>nul
rmdir /s /q "node_modules" 2>nul

echo Cleanup complete!
echo.
echo Next steps:
echo 1. git add .
echo 2. git commit -m "Clean: Remove images and unnecessary files"
echo 3. git push origin main
