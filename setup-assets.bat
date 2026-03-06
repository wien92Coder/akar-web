@echo off
echo ============================================
echo   AKAR Web - Asset Setup Script
echo ============================================
echo.

REM Create public directories
if not exist "public\assets" mkdir "public\assets"
if not exist "public\generated" mkdir "public\generated"

echo Copying image assets...

copy "assets\Hero Image.png" "public\assets\Hero Image.png" /Y >nul 2>&1
copy "assets\Akar Jogja People.png" "public\assets\Akar Jogja People.png" /Y >nul 2>&1
copy "assets\Avatars.png" "public\assets\Avatars.png" /Y >nul 2>&1
copy "assets\Container.png" "public\assets\Container.png" /Y >nul 2>&1
copy "assets\House keeping card.png" "public\assets\House keeping card.png" /Y >nul 2>&1
copy "assets\Topographic 3.jpg" "public\assets\Topographic 3.jpg" /Y >nul 2>&1
copy "assets\Logo Akar Jogja.svg" "public\assets\Logo Akar Jogja.svg" /Y >nul 2>&1

echo Copying generated images...
copy "C:\Users\win-code\.gemini\antigravity\brain\62a8c47b-d2c1-4943-a724-efdba999c71d\culinary_kitchen_1772778864179.png" "public\generated\culinary_kitchen.png" /Y >nul 2>&1
copy "C:\Users\win-code\.gemini\antigravity\brain\62a8c47b-d2c1-4943-a724-efdba999c71d\kitchen_classroom_1772778885366.png" "public\generated\kitchen_classroom.png" /Y >nul 2>&1
copy "C:\Users\win-code\.gemini\antigravity\brain\62a8c47b-d2c1-4943-a724-efdba999c71d\training_classroom_1772778914382.png" "public\generated\training_classroom.png" /Y >nul 2>&1

echo.
echo [OK] Assets copied successfully!
echo.
echo Next steps:
echo   1. Run: npm install
echo   2. Run: npm run dev
echo   3. Open: http://localhost:3000
echo.
pause
